# Plinko

A web-based implementation of the classic Plinko game, inspired by the  OStakeriginal. Players can drop a ball from the top of a pegged pyramid and watch as it bounces down to land on a multiplier at the bottom. This project features a custom physics engine to simulate the ball's movement and collisions.

For a deeper dive into the project's origins, my problem-solving approach, and a comparison with professional implementations, check out my detailed **[Project Case Study on Notion](https://www.notion.so/STAKE-2913bedcb22e8079997af6e460f207fa?source=copy_link)**.

---

## ⚙️ Tech Stack

- **Frontend:** React, Vite, TypeScript
- **Backend:** Node.js, Express, TypeScript
- **Package Manager:** pnpm

---


### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/en) (v18 or later is recommended)
- [pnpm](https://pnpm.io/installation)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/bharath391/plinkoo.git](https://github.com/bharath391/plinkoo.git)
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd plinkoo
    ```

3.  **Set up the Backend:**
    ```sh
    cd backend
    pnpm install
    pnpm build
    pnpm start
    ```

4.  **Set up the Frontend** (in a new terminal window):
    ```sh
    cd frontend
    pnpm install
    pnpm run dev
    ```

Your application should now be running locally. Open your browser to the address provided by the `pnpm run dev` command (usually `http://localhost:5173`).
