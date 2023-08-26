import axios from "../api/axios";

export async function getAuth() {
  try {
    const auth = await axios.get(`/auth/me`);
    const role = auth.data.data.role;
    return role;
  } catch (err) {
    return "UNREGISTERED";
  }
}
