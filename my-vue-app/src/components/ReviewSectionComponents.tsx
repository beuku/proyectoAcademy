import { useState } from "react";
import "../styless/ReviewSection.css";
import Moderacion from "./Moderacion"; 
import { TextField, TextareaAutosize, } from "@mui/material";


interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

const ReviewSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState<string>(""); 
  const [rating, setRating] = useState<number | "">(""); 
  const [comment, setComment] = useState<string>(""); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !rating || !comment) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    const newReview: Review = {
      id: Date.now(),
      name,
      rating: Number(rating),
      comment, 
    };
    setReviews([...reviews, newReview]);
    setRating("");
    setComment("");
    setName("");
  };

  return (
    <div className="review-section">
      <form className="review-form" onSubmit={handleSubmit}>
        <label>Nombre:</label>
          <TextField
            className="input-full-width "
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Escribe tu nombre..."
            size="small"
          />

        <label>Calificación (1-5):</label>
          <TextField
            className="input-full-width "
            fullWidth
            variant="outlined"
            type="number"
            value={rating}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 1 && value <= 5) {
                setRating(value); 
              } else if (e.target.value === "") {
                setRating(""); 
              }
            }}
            placeholder="Ingrese una calificación..."
          />

        <label>Comentario:</label>
          <TextareaAutosize
            minRows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Escribe tu comentario aquí..."
            
          />

        <button type="submit">Enviar Reseña</button>
      </form>

      <ul className="review-list">
        {reviews.map((review) => (
          <li className="review-li" key={review.id}>
            <p className="ESTRELLA">
              <strong>{review.name || "Anónimo"}:</strong>
              <span className="rating-stars">
                {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
              </span>
            </p>

            <p className="Comentario-R">
              <Moderacion comment={review.comment} />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewSection;
