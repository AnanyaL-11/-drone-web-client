// web-application/log-view.js
import { DRONE_ID } from "./config.js";

const apiUrl = `http://localhost:3000/logs/${DRONE_ID}`;

async function loadLogs() {
  try {
    const response = await fetch(apiUrl);
    const logs = await response.json();

    const tableBody = document.querySelector("#log-table tbody");
    tableBody.innerHTML = ""; // เคลียร์ข้อมูลเก่า

    logs.forEach(log => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${log.drone_id}</td>
        <td>${log.drone_name}</td>
        <td>${log.country}</td>
        <td>${log.celsius}</td>
        <td>${log.created}</td>
      `;

      tableBody.appendChild(row);
    });

  } catch (err) {
    console.error("Error loading logs:", err);
  }
}

loadLogs();
