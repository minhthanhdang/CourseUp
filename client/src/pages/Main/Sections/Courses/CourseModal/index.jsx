import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../../../hooks/useAxioxPrivate";
import { useParams } from "react-router-dom";
import Icon from "../../../../../components/shared/Icon";
import CircleAvatar from "../../../../../components/CircleAvatar";
import { EnrollButton } from "./Components/EnrollButton";

const CourseModal = ({ ...rest }) => {
  const [courseData, setCourseData] = useState({});
  const axiosPrivate = useAxiosPrivate();
  const { courseId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      axiosPrivate
        .get(`courses/course/${courseId}`, {
          signal: controller.signal,
        })
        .then((res) => {
          console.log("Course data:");
          console.log(res.data);
          setCourseData(res.data);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-[1rem] px-[2rem] pt-[1.5rem] pb-[3rem] text-black">
      <div className="flex flex-col justify-end items-end ">
        <Icon
          name="close"
          className="text-[18px]  w-10 h-10 rounded-full bg-bgLight flex items-center justify-center"
        />
      </div>
      <div className="grid grid-cols-7 w-full px-[4rem]">
        <div className="col-span-4 flex flex-col gap-4">
          <div className="text-[2.3rem] font-bold leading-[1rem] pt-[1rem]">
            {courseData.courseName}
          </div>
          <div className="text-[1.1rem] font-regular">
            {courseData.description
              ? courseData.description
              : "This course has no description"}
          </div>
          <div className="text-[1.2rem] font-regular flex flex-row items-center gap-5">
            Admin: {courseData.adminUsername}
            {courseData.adminAvatarLink ? (
              <div></div>
            ) : (
              <CircleAvatar className="w-7 h-7">
                {courseData.adminUsername?.charAt(0).toUpperCase()}
              </CircleAvatar>
            )}
          </div>

          <div className="bg-bgLight w-[300px] flex flex-col items-center">
            <div className="text-[1rem]">
              {courseData.studentCount} have enrolled! Be the next student!
            </div>
            <div className="font-semibold">
              {courseData.isEnrolled ? (
                <EnrollButton courseId={courseData.courseId} />
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <img src={courseData.imgLink} />
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
