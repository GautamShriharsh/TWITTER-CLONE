import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useUpdateUserProfile = (authUser) => {
	const queryClient = useQueryClient();
	const navigate = useNavigate();


	const { mutateAsync: updateProfile, isPending: isUpdatingProfile } = useMutation({
		mutationFn: async (formData) => {
			try {
				const res = await fetch(`/api/users/update`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				});
				const data = await res.json();
				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
				return data;
			} catch (error) {
				throw new Error(error.message);
			}
		},
		onSuccess: (data) => {
			toast.success("Profile updated successfully");
			if (authUser.username !== data.username) {
				navigate(`/profile/${data.username}`);
			}
			Promise.all([
				queryClient.invalidateQueries({ queryKey: ["authUser"] }),
				// queryClient.invalidateQueries({ queryKey: ["userProfile"] }),
				queryClient.invalidateQueries({ queryKey: ["posts"] }),

			]);
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	return { updateProfile, isUpdatingProfile };
};

export default useUpdateUserProfile;