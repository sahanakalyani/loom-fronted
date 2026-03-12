import { getUserPosts, getUserProfile } from "@/services/profile.service";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const loadProfile = async () => {
    try {
      setError("");
      const [profile, userPosts] = await Promise.all([
        getUserProfile(id),
        getUserPosts(id),
      ]);
      (setUser(profile), setPosts(userPosts));
    } catch (err) {
      setError(err.message || "Failed to Load User Profile");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadProfile();
  }, [id]);
  if (loading)
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <p className="text-gray-500 text-sm">Loading profile...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center gap-3 text-center px-6">
        <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-xl">
          ⚠️
        </div>
        <p className="font-semibold text-gray-900 text-[15px] tracking-tight">
          Something went wrong
        </p>
        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
          {error}
        </p>
        <button
          onClick={loadProfile}
          className="mt-2 px-5 py-2 rounded-full bg-gray-950 text-white text-sm font-semibold hover:bg-gray-700 transition-all duration-150"
        >
          Try again
        </button>
      </div>
    );

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-6 md:px-4">
      <h1 className="hidden md:inline-block text-[15px] font-medium mb-4 shrink-0">
        Profile
      </h1>

      <div className="w-full md:bg-white md:border md:border-black/10 md:rounded-3xl md:shadow-xs"></div>
      <div className="px-6 pt-6 p6-5 ">
        <div className="flex items-start justify-between mb-4">
          <h2 className="md:text-[]20px] tracking-tight text-gray-900 loading-tight font-bold capitalize">
            {user.username}
          </h2>
          <p>{user.username}</p>
          <div className="flex-1 min-w-0 pr-4"></div>
        </div>
        <div className="md:w-21 md:h-21 w-18 h-18 rounded-full bg-gradient-to-br from-gray-700 to-fray-500-500 flex items-center justify-center text-white font-bold text-lg md:text-x1"></div>
        {user.username?.[0].toUpperCase}
      </div>
    </div>
  );
};

export default Profile;
