// === Update your contact info here ===
const CONTACT_EMAIL = "your_email@example.com";
const CONTACT_PHONE = "+91 12345 67890";

// Function to show the contact modal
function showContact() {
  // Check if modal already exists
  let existingModal = document.getElementById("contactModal");
  if (!existingModal) {
    // Create modal dynamically
    const modal = document.createElement("div");
    modal.id = "contactModal";
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <h2>Place Your Order</h2>
        <p>📧 Email: srimmsantharubini@gmail.com</p>
        <p>📞 Phone: +91 8695165625</p>
      </div>
    `;
    document.body.appendChild(modal);
  }
  document.getElementById("contactModal").style.display = "block";
}

// Function to close modal
function closeModal() {
  const modal = document.getElementById("contactModal");
  if (modal) modal.style.display = "none";
}

// Close modal when clicking outside content
window.onclick = function(event) {
  const modal = document.getElementById("contactModal");
  if (event.target === modal) modal.style.display = "none";
};
