"use server";
export const createTopic = async (formData: FormData) => {
  const name = formData.get("name");
  const discription = formData.get("discription");
  console.log(name, discription);
};
