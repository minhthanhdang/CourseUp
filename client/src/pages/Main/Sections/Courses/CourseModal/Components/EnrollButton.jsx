import useAxiosPrivate from "../../../../../../hooks/useAxioxPrivate";
import { useNavigate } from "react-router-dom";

export const EnrollButton = ({ courseId }) => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const controller = new AbortController();

  const handleEnroll = async (e) => {
    e.preventDefault();

    const response = await axiosPrivate
      .post(`/enrollment/createEnrollment/${courseId}`, {
        signal: controller.signal,
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    navigate("/myCourses");
    window.location.reload();
  };

  return (
    <div className="bg-red-500 flex items-center justify-center ">
      <form>
        <button
          className="text-white text-[1.125rem] text-center font-semibold w-100 h-100 px-[1rem] py-[9px]"
          onClick={handleEnroll}
        >
          Enroll now!
        </button>
      </form>
    </div>
  );
};
