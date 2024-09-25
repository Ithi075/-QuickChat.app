let currentRoom = '';
let username = '';
const chatWindow = document.getElementById('chatWindow');
const roomNameInput = document.getElementById('roomName');
const usernameInput = document.getElementById('username');
const messageInput = document.getElementById('messageInput');

document.getElementById('joinRoom').addEventListener('click', () => {
    currentRoom = roomNameInput.value.trim();
    username = usernameInput.value.trim();
    
    if (currentRoom && username) {
        chatWindow.innerHTML = ''; // チャットウィンドウをクリア
        roomNameInput.value = ''; // 入力をクリア
        usernameInput.value = ''; // 入力をクリア
        alert(`ルーム「${currentRoom}」に${username}として参加しました`);
    } else {
        alert('ルームIDとユーザー名を入力してください');
    }
});

document.getElementById('sendMessage').addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message && currentRoom && username) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = `${username} (${currentRoom}): ${message}`;
        chatWindow.appendChild(messageElement);
        messageInput.value = ''; // 入力をクリア
        chatWindow.scrollTop = chatWindow.scrollHeight; // スクロールを下に
    } else {
        alert('メッセージ、ルーム名、またはユーザー名を入力してください');
    }
});

document.getElementById('deleteRoom').addEventListener('click', () => {
    chatWindow.innerHTML = ''; // チャットウィンドウをクリア
    currentRoom = ''; // 現在のルーム名をリセット
    username = ''; // 現在のユーザー名をリセット
    roomNameInput.value = ''; // 入力をクリア
    messageInput.value = ''; // 入力をクリア
    alert('ルームが削除されました');
});
