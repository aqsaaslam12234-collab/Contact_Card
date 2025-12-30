import { useEffect, useState } from "react";

interface CommentsType {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: {
    id: number;
    username: string;
  };
}
const CommentsComponent = () => {
  const [comment, setComment] = useState<CommentsType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch("https://dummyjson.com/comments");
      const data = await request.json();
      setComment(data.comments);
    };
    fetchData();
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Comments</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {comment.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <p className="font-medium  text-teal-700">{item.body}</p>
            <h1 className="font-bold">{item.postId}</h1>
            <h1 className="font-bold">{item.likes}</h1>
            {item.user && (
              <p className="text-xs text-gray-500 mt-2">
                by @{item.user.username}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsComponent;
