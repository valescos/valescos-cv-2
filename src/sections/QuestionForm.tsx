import { useTailwindConst } from "../hooks/useTailwindConst";
import { useLimitScore } from "../stores/limitStore";
import { cn } from "../utilities/cn";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { limitSchema } from "../types";
import type { TlimitSchema } from "../types";

export default function QuestionForm() {
  const setValue = useLimitScore((state) => state.setValue);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<TlimitSchema>({
    resolver: zodResolver(limitSchema),
    defaultValues: {
      limit: 10,
    },
  });

  const { RESPONSIVE_WRAPPER } = useTailwindConst();
  const onSubmit = () => {
    setValue(getValues("limit"));
  };

  return (
    <section className={cn("flex flex-col items-center", RESPONSIVE_WRAPPER)}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <label
          htmlFor="limit"
          className="cursor-pointer text-center font-bold dark:text-white"
        >
          Сколько, по-вашему, проектов нужно выполнить, чтобы достичь мастерства
          в чём-либо?
        </label>
        <input
          {...register("limit")}
          id="limit"
          type="number"
          className="w-32 bg-transparent text-center text-6xl font-bold dark:text-white"
        />
        <button className="pt-2 transition-all hover:scale-[115%]">
          {chekmark}
        </button>
        {errors.limit ? (
          <p>{errors.limit.message}</p>
        ) : (
          <p className="opacity-0">0</p>
        )}
      </form>
    </section>
  );
}

const chekmark = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-12"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </svg>
);
