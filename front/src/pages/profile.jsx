export default function Profile() {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
      
        {/* Main Content */}
        <div className="container mx-auto mt-6">
          {/* User Info Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex items-center space-x-6">
              <img
                src="https://via.placeholder.com/100"
                alt="User Avatar"
                className="w-24 h-24 rounded-full"
              />
              <div>
                <h2 className="text-2xl font-bold">John Doe</h2>
                <p className="text-gray-600">@johndoe</p>
                <p className="mt-2">Software Developer | Tech Enthusiast</p>
              </div>
            </div>
            <div className="mt-4 flex space-x-4">
              <div>
                <span className="font-bold">125</span> Posts
              </div>
              <div>
                <span className="font-bold">1.2K</span> Followers
              </div>
              <div>
                <span className="font-bold">500</span> Following
              </div>
            </div>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Edit Profile
            </button>
          </div>
  
          {/* User Posts Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
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
                  <h3 className="font-bold">John Doe</h3>
                  <p className="text-gray-600">@johndoe</p>
                </div>
              </div>
              <p className="mb-4">This is a sample post content. Hello world!</p>
              <div className="flex space-x-4">
                <button className="flex items-center text-gray-600">
                  <span className="mr-2">👍</span> 12 Likes
                </button>
                <button className="flex items-center text-gray-600">
                  <span className="mr-2">💬</span> 3 Comments
                </button>
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
                  <h3 className="font-bold">John Doe</h3>
                  <p className="text-gray-600">@johndoe</p>
                </div>
              </div>
              <p className="mb-4">Another post here. Enjoy your day!</p>
              <div className="flex space-x-4">
                <button className="flex items-center text-gray-600">
                  <span className="mr-2">👍</span> 8 Likes
                </button>
                <button className="flex items-center text-gray-600">
                  <span className="mr-2">💬</span> 1 Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }