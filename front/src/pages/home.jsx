export default function Home() {
    return (
      <div className="min-h-screen p-6">
        {/* Main Content */}
        <div className="container mx-auto mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Community or Rooms */}
          <div className="bg-white p-6 rounded-lg shadow-md"> {/* Increased padding here */}
            <h2 className="text-xl font-bold mb-4">Community / Rooms</h2> {/* Adjusted margin-bottom */}
            <div className="space-y-4">
              {/* Room Card */}
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Room Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-bold">General Chat</h3>
                  <p className="text-gray-600">Open to everyone</p>
                </div>
              </div>
  
              {/* Room Card */}
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Room Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-bold">Tech Talk</h3>
                  <p className="text-gray-600">Discuss the latest tech</p>
                </div>
              </div>
  
              {/* Room Card */}
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Room Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-bold">Gaming</h3>
                  <p className="text-gray-600">For gamers only</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Center Column - Post Section and Comments */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Create a Post</h2>
            <textarea
              placeholder="What's on your mind?"
              className="w-full p-2 border rounded-lg mb-4"
              rows="4"
            ></textarea>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Post
            </button>
  
            {/* Posts Section */}
            <div className="mt-10">
              <h2 className="text-xl font-bold mb-4">Posts</h2>
  
              {/* Single Post */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Jane Doe</h3>
                    <p className="text-gray-600">@janedoe</p>
                  </div>
                </div>
                <p className="mb-4">This is a sample post content. Hello world!</p>
                <div className="flex space-x-4">
                  <button className="flex items-center text-gray-600">
                    <span className="mr-2">👍</span> Like
                  </button>
                  <button className="flex items-center text-gray-600">
                    <span className="mr-2">💬</span> Comment
                  </button>
                </div>
  
                {/* Comments Section */}
                <div className="mt-4 pl-6 border-l-2 border-gray-200">
                  <div className="mb-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://via.placeholder.com/30"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <h4 className="font-bold">John Doe</h4>
                        <p className="text-gray-600">Great post!</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://via.placeholder.com/30"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <h4 className="font-bold">Alice</h4>
                        <p className="text-gray-600">Nice one!</p>
                      </div>
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
              </div>
  
              {/* Another Post */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">Alice</h3>
                    <p className="text-gray-600">@alice</p>
                  </div>
                </div>
                <p className="mb-4">Another post here. Enjoy your day!</p>
                <div className="flex space-x-4">
                  <button className="flex items-center text-gray-600">
                    <span className="mr-2">👍</span> Like
                  </button>
                  <button className="flex items-center text-gray-600">
                    <span className="mr-2">💬</span> Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Right Column - List of Friends */}
          <div className="bg-white p-6 rounded-lg shadow-md"> {/* Increased padding here */}
            <h2 className="text-xl font-bold mb-4">Friends</h2> {/* Adjusted margin-bottom */}
            <div className="space-y-4">
              {/* Friend Card */}
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-bold">Jane Doe</h3>
                  <p className="text-gray-600">@janedoe</p>
                </div>
              </div>
  
              {/* Friend Card */}
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-bold">John Doe</h3>
                  <p className="text-gray-600">@johndoe</p>
                </div>
              </div>
  
              {/* Friend Card */}
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-bold">Alice</h3>
                  <p className="text-gray-600">@alice</p>
                </div>
              </div>
  
              {/* Friend Card */}
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-bold">Bob</h3>
                  <p className="text-gray-600">@bob</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }