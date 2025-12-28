"use client";

import { Sparkles, BookOpen, Mic2, MessageSquare, Clock, User, ChevronDown } from "lucide-react";
import { subjects } from "@/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CompanionSchema } from "@/lib/schema";
import * as z from "zod";
import FieldBox from "./FieldBox";
import cn from "@/utils/cn";

type FormInputs = z.infer<typeof CompanionSchema>;

const CompanionForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(CompanionSchema),
    defaultValues: {
      name: '',
      subject: '',
      topic: "",
      voice: "",
      style: "",
      duration: 15
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log("Login data:", data);
  }

  return (
    <form
      className="space-y-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FieldBox
        error={errors.name?.message}
      >
        <label className="label">
          <User size={20} /> Companion Name
        </label>
        <input
          {...register("name")}
          placeholder="Enter the companion name"
          className={cn(
            "input",
            errors.name && "error"
          )}
        />
      </FieldBox>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FieldBox
          error={errors.subject?.message}
        >
          <label className="label">
            <BookOpen size={20} /> Subject
          </label>

          <div className="relative">
            <select
              {...register("subject")}
              className={cn(
                "select",
                errors.subject && "error"
              )}
            >
              <option value="">Select Subject</option>
              {
                subjects.map((subject) =>
                  <option key={subject} value={subject}>{subject}</option>
                )
              }
            </select>
            <ChevronDown
              size={20}
              className="chevron-down"
            />
          </div>
        </FieldBox>

        {/* duration field */}
        <FieldBox
          error={errors.duration?.message}
        >
          <label className="label">
            <Clock size={20} /> Duration in minutes (min)
          </label>
          <input
            type="number"
            {...register("duration")}
            min={1}
            placeholder="duration"
            className={cn(
              "input",
              errors.duration && "error"
            )}
          />
        </FieldBox>
      </div>

      {/* topic field */}
      <FieldBox
        error={errors.topic?.message}
      >
        <label className="label">
          <Sparkles size={20} /> What should the companion help with?
        </label>
        <textarea
          {...register("topic")}
          placeholder="Ex.Derivates & Integrals"
          className={cn(
            "input min-h-25 ",
            errors.topic && "error"
          )}
        />
      </FieldBox>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* voice select */}
        <FieldBox
          error={errors.voice?.message}
        >
          <label className="label">
            <Mic2 size={20} /> Voice
          </label>
          <div className="relative">
            <select
              {...register("voice")}
              className={cn(
                "select",
                errors.voice && "error"
              )}
            >
              <option value="">Select Voice</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <ChevronDown
              size={20}
              className="chevron-down"
            />
          </div>

        </FieldBox>

        {/* style select */}
        <FieldBox
          error={errors.style?.message}
        >
          <label className="label">
            <MessageSquare size={20} /> Teaching Style
          </label>
          <div className="relative">
            <select
              {...register("style")}
              className={cn(
                "select",
                errors.style && "error"
              )}
            >
              <option value="">Select Style</option>
              <option value="formal">Formal</option>
              <option value="casual">Casual</option>
            </select>
            <ChevronDown
              size={20}
              className="chevron-down"
            />
          </div>
        </FieldBox>
      </div>
      <button
        type="submit"
        className="bg-btn-red text-white px-6 py-3 rounded-xl font-medium"
      >
        Build Your Companion
      </button>
    </form >
  );
};

export default CompanionForm;
