import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import CreateCommunityModal from "./CreateCommunityModal";
import "../styles/CreateDropDown.css";

interface CreateDropDownProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateDropDown = ({ isOpen, onClose }: CreateDropDownProps) => {
  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const subredditMatch = location.pathname.match(/^\/r\/([^/]+)/);
  const currentSubreddit = subredditMatch ? subredditMatch[1] : null;

  if (!isOpen) {
    return null;
  }

  const handleCreatePost = () => {
    if (currentSubreddit) {
      navigate(`/r/${currentSubreddit}/submit`);
      onClose();
    }
  };

  const handleCreateCommunity = () => {
    setIsCommunityModalOpen(true);
    onClose();
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="create-dropdown">
        <div className="dropdown-header">
          <h3>Create</h3>
        </div>
        <div className="dropdown-options">
          {currentSubreddit && (
            <button className="dropdown-option" onClick={handleCreatePost}>
              <div className="option-icon">
                <FaPlus />
              </div>
              <div className="option-content">
                <span className="option-title">Post</span>
                <span className="option-description">
                  Share to r/{currentSubreddit}
                </span>
              </div>
            </button>
          )}
          <button className="dropdown-option" onClick={handleCreateCommunity}>
            <div className="option-icon">
              <FaPlus />
            </div>
            <div className="option-content">
              <span className="option-title">Community</span>
              <span className="option-description">
                Create a new Community r/{currentSubreddit}
              </span>
            </div>
          </button>
        </div>
      </div>

      {isCommunityModalOpen && <CreateCommunityModal isOpen={isCommunityModalOpen} onClose={() => setIsCommunityModalOpen(false)} />}
    </>
  );
};

export default CreateDropDown;
