import { useState } from "react";
import "../styless/ReviewSection.css";
import Moderacion from "./Moderacion"; 
import { TextField, TextareaAutosize, Rating } from "@mui/material";


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
  

  function handleSubmit (e: React.FormEvent)  {
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
        <label className="texto">Nombre:</label>
            <TextField
            className="input-full-width "
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Escribe tu nombre..."
            size="small"
            />

        <label className="texto">Calificación (1 a 5 estrellas):</label>
        <Rating
          name="half-rating"
          value={rating === "" ? 0 : rating} 
          onChange={(_, newValue) => setRating(newValue ?? "")} 
          precision={1}
          className="miclase"
        />

        <label className="texto">Comentario:</label>
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
              <span>
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
