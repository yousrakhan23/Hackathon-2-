"use client";

import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<{ id: number; user: string; text: string; timestamp: string; }[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      const userName = prompt("Please enter your name:");
      if (userName) {
        setComments([
          ...comments,
          {
            id: Date.now(),
            user: userName,
            text: newComment,
            timestamp: new Date().toLocaleString(),
          },
        ]);
      }
      setNewComment("");
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-[#16526e]">
        Comments
      </h2>

      {/* Comment Input Section */}
      <div className="flex flex-col gap-4 mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-3 border border-[#000000] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#ffffff]"
          rows={4}
        ></textarea>
        <button
          onClick={handleAddComment}
          className="text-black bg-[#029FAE] hover: py-2 px-4 rounded-md  focus:outline-none focus:ring-2 focus:ring-black"
        >
          Submit
        </button>
      </div>

      {/* Comments Display */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 bg-slate-200 rounded-md shadow-md"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-800">
                {comment.user}
              </span>
              <span className="text-xs text-gray-500">
                {comment.timestamp}
              </span>
            </div>
            <p className="text-gray-700">{comment.text}</p>
          </div>
        ))}
        {comments.length === 0 && (
          <p className="text-center text-gray-500">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
