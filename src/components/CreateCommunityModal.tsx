import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import "../styles/CreateCommunityModal.css";

interface CreateCommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateCommunityModal = ({
  isOpen,
  onClose,
}: CreateCommunityModalProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {};

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="modal-container">
        <div className="modal-container">
          <h2>Create a Community</h2>
          <button className="close-button" onClick={onClose}>
            &times
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Community Name</label>
            <div className="input-prefix">r/</div>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter community name"
              maxLength={21}
              disabled={isLoading}
            />

            <p className="input-help">
              Community names including capitalization cannot be changed.
            </p>
          </div>
          <div className="form-group">
            <label>
              Description <span>(optional)</span>
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter community description"
              maxLength={100}
              disabled={isLoading}
            />
          </div>
          {error && <div className="error-message">{error}</div>}

          <div className="modal-folder">
            <button
              type="button"
              className="cancel-button"
              onClick={onClose}
              disabled={isLoading}
            ></button>

             <button
              type="submit"
              className="cancel-button"
              disabled={isLoading}
            >
                {isLoading ? "Creating..." : "Create Community"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateCommunityModal;