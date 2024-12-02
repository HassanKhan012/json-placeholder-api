import React from "react";


export const Resources = () => {
  return (
    <div className="text-left p-4 pl-32 mt-24">
      <h1 className="text-4xl font-normal">Resources</h1>
      <p className="mt-6">
        JSONPlaceholder comes with a set of 6 common resources:
      </p>

      <ul className="mt-6 list-disc pl-6 list-none">
      <li>
      <a href="https://json-placeholder-apis.vercel.app/post">/post</a> - 100 posts
    </li>
    <li>
      <a href="https://json-placeholder-apis.vercel.app/comments">/comments</a> - 500 comments
    </li>
    <li>
      <a href="https://json-placeholder-apis.vercel.app/albums">/albums</a> - 100 albums
    </li>
    <li>
      <a href="https://json-placeholder-apis.vercel.app/photos">/photos</a> - 5000 photos
    </li>
    <li>
      <a href="https://json-placeholder-apis.vercel.app/todos">/todos</a> - 200 todos
    </li>
    <li>
      <a href="https://json-placeholder-apis.vercel.app/users">/users</a> - 10 users
    </li>
      </ul>

      {/* Note Section */}
      <p className="mt-6 text-sm text-gray-900">
        <strong>Note:</strong> Resources have relations For example: posts have
        many comments, albums have many photos, etc See guide for the full list
      </p>
    </div>
  );
};
