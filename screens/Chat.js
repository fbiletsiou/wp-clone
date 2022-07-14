// @refresh reset
import { useRoute } from "@react-navigation/native";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import { auth, db } from "../firebase";
import GlobalContext from "../context/Context";
import { addDoc, collection, doc, onSnapshot, setDoc, updateDoc } from "@firebase/firestore";
import { GiftedChat } from "react-native-gifted-chat";

const randomId = nanoid();

export default function Chat() {
    const [roomHash, setRoomHash] = useState("");
    const [messages, setMessages] = useState([]);
    const {theme: {colors}} = useContext(GlobalContext);
    const {currentUser} = auth;
    const route = useRoute();
    const room = route.params.room;
    const selectedImage = route.params.image;
    const userB = route.params.user;

    const senderUser = currentUser.photoURL
     ? {
         name: currentUser.displayName, 
         _id: currentUser.uid, 
         avatar: currentUser.photoURL
        } 
        : {name: currentUser.displayName, _id: currentUser.uid};

    const roomId = room ? room.id : randomId;

    const roomRef = doc(db, "rooms", roomId);
    const roomMessagesRef = collection(db, "rooms", roomId, "messages");

    useEffect(() => {
        (async () => {
            if(!room) {
                // Creating a new room
                const currUserData = {
                    displayName: currentUser.displayName,
                    email: currentUser.email
                };
                if(currentUser.photoURL) {
                    currUserData.photoURL = currentUser.photoURL;
                }
                const userBData = {
                    displayName: userB.contactName || userB.displayName || "", 
                    email: userB.email
                };
                if(userB.photoURL) {
                    userBData.photoURL = userB.photoURL;
                }
                const roomData = {
                    participants: [currUserData, userBData],
                    participantsArray: [currentUser.email, userB.email]
                };
                try {
                    await setDoc(roomRef, roomData);
                } catch (error) {
                    console.log(error);
                }
            }
            const emailHash = `${currentUser.email}:${userB.email}`;
            setRoomHash(emailHash);
        })();
    }, []);

    useEffect(() => {
        const unsubscribe = onSnapshot(roomMessagesRef, querySnapshot => {
            const messagesFirestore = querySnapshot
                .docChanges()
                .filter(({ type }) => type === 'added')
                .map(({doc}) => {
                    const message = doc.data();
                    return { ...message, createdAt: message.createdAt.toDate() };
                })
                appendMessages(messagesFirestore);
        });
        return () => unsubscribe();
    }, []);

    const appendMessages = useCallback((messages) => {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages)) 
    }, [messages])

    async function onSend(messages = []) {
        const writes = messages.map((m) => addDoc(roomMessagesRef, m));
        const lastMessage = messages[messages.length -1];
        writes.push(updateDoc(roomRef, {lastMessage}));
        await Promise.all(writes);
    }

    return(
        <ImageBackground resizeMode="cover" source={require("../assets/chatbg.png")} style={{flex: 1 }}>
            <GiftedChat 
                onSend={onSend}
                messages={messages} 
                user={senderUser}
                renderAvatar={null}
            />
        </ImageBackground>
    )
}