import { useState } from "react";
import "../styless/ReviewSection.css"; 

interface Review {
    id: number;
    name: string;
    rating: number;
    comment: string;
  }

  const ReviewSection = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [name, setName] = useState<string>(""); // Estado para el nombre
    const [rating, setRating] = useState<number | "">(""); // Estado para la calificación
    const [comment, setComment] = useState<string>(""); // Estado para el comentario

  function handleSubmit (e: React.FormEvent)  {
    e.preventDefault();
    if (!name || !rating || !comment) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    const newReview: Review = { id: Date.now(), name, rating: Number(rating), comment };
    setReviews([...reviews, newReview]);
    setRating("");
    setComment("");
    setName("");
    
  };

  return (
    <div className="review-section">  
      <form className="review-form" onSubmit={handleSubmit}>
      <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Escribe tu nombre"
        />


        <label>Calificación (1-5):</label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value) || "")}
          placeholder="Ingrese una calificación"
        />
        <label>Comentario:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Escribe tu comentario aquí..."
        />
        <button type="submit">Enviar Reseña</button>
      </form>
      <ul className="review-list">
        {reviews.map((review) => (
          <li key={review.id}>
            <p>
            <strong>{review.name || "Anónimo"}:</strong> 
              <span className="rating-stars">
                {"★".repeat(review.rating)}{" "}
                {"☆".repeat(5 - review.rating)}
              </span>
            </p>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewSection;