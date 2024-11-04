import React, { useState } from 'react';

type Props = {};

const SellerReviewCard: React.FC<Props> = () => {
    const [rating, setRating] = useState<number>(0);
    const [review, setReview] = useState<string>('');
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const handleRating = (star: number) => {
        setRating(star);
    };

    const handleSubmit = () => {
        if (rating === 0 || review.trim() === '') {
            alert("Please provide a rating and write a review before submitting.");
            return;
        }
        alert(`Rating: ${rating}, Review: ${review}`);
        setIsVisible(false);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <div className="flex justify-between items-center border-b pb-3">
                    <h2 className="text-lg font-semibold">Rate your experience</h2>
                    <button 
                        className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                        onClick={handleClose}
                    >
                        &times;
                    </button>
                </div>
                <div className="my-4">
                    <div className="flex justify-center space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={`cursor-pointer text-3xl ${
                                    star <= rating ? 'text-yellow-400' : 'text-gray-300'
                                }`}
                                onClick={() => handleRating(star)}
                            >
                                &#9733;
                            </span>
                        ))}
                    </div>
                    <textarea
                        className="w-full mt-4 p-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                        placeholder="Write about your experience"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                    <button
                        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg"
                        onClick={handleSubmit}
                    >
                        Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SellerReviewCard;
