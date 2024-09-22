const InstructionsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">How to Use the App</h1>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Step 1: Register</h2>
          <p className="mb-4">
            Before you can start using the chat app, you need to create an
            account. Follow these steps:
          </p>
          <ul className="list-disc ml-6">
            <li>
              Click on the <strong>Register</strong> link in the navigation bar.
            </li>
            <li>
              Fill in your <strong>username</strong>, <strong>email</strong>, and{" "}
              <strong>password</strong> in the registration form.
            </li>
            <li>
              Click on the <strong>Register</strong> button to create your
              account.
            </li>
            <li>
              You will be redirected to the login page after successful
              registration.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">Step 2: Login</h2>
          <p className="mb-4">
            Once your account is created, log in to the app by following these
            steps:
          </p>
          <ul className="list-disc ml-6">
            <li>
              Click on the <strong>Login</strong> link in the navigation bar.
            </li>
            <li>
              Enter your <strong>email</strong> and <strong>password</strong> in
              the login form.
            </li>
            <li>
              Click on the <strong>Login</strong> button to access your
              dashboard.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">Step 3: Join a Chat Room</h2>
          <p className="mb-4">
            After logging in, you can join a chat room to start chatting with
            others.
          </p>
          <ul className="list-disc ml-6">
            <li>
              Go to the <strong>Chat Rooms</strong> page by selecting the &quot;Chat
              Rooms&quot; link from the navigation.
            </li>
            <li>
              Select a room from the available list or create a new chat room
              (if enabled).
            </li>
            <li>
              Click on the room to join and start chatting in real-time.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">Step 4: Send and Receive Messages</h2>
          <p className="mb-4">
            Once you&apos;re inside a chat room, you can send messages to other users
            in real-time.
          </p>
          <ul className="list-disc ml-6">
            <li>
              Type your message in the input box at the bottom of the chat
              screen.
            </li>
            <li>
              Press <strong>Enter</strong> or click the <strong>Send</strong>{" "}
              button to send your message.
            </li>
            <li>
              Messages will appear in the chat room as they are sent and
              received.
            </li>
            <li>
              You can view the last 50 messages that were sent before you joined
              the room.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">Step 5: Logout</h2>
          <p className="mb-4">
            When you&apos;re done, you can log out of your account by following these
            steps:
          </p>
          <ul className="list-disc ml-6">
            <li>
              Click the <strong>Logout</strong> button located in the navigation
              bar.
            </li>
            <li>Confirm the logout in the pop-up dialog.</li>
            <li>
              You will be redirected to the login page once you log out.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">Additional Features</h2>
          <ul className="list-disc ml-6">
            <li>
              <strong>Real-time Chat:</strong> Communicate with other users in
              real-time using WebSocket technology.
            </li>
            <li>
              <strong>Multiple Rooms:</strong> You can join different chat rooms
              and participate in multiple conversations.
            </li>
            <li>
              <strong>Message History:</strong> View the last 50 messages sent
              before you joined the room.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold">Need Help?</h2>
          <p>
            If you encounter any issues while using the app, feel free to reach
            out to our support team through the <strong>Support</strong> page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstructionsPage;
