export const searchQuery = async (qurey) => {
  try {
    const res = await api.get("/search", {
      params: { q: query },
    });
    return res.data;
  } catch (err) {
    throw err.message;
  }
};
