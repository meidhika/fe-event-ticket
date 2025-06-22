import { Controller, set } from "react-hook-form";
import useEventFilter from "./useEventFilter";
import {
  Autocomplete,
  AutocompleteItem,
  Select,
  SelectItem,
  Skeleton,
} from "@nextui-org/react";
import { ICategory } from "@/types/Category";
import useChangeUrl from "@/hooks/useChangeUrl";
import { Fragment, useEffect } from "react";

const EventFilter = () => {
  const { control, dataCategory, isSuccessGetCategory, setValue } =
    useEventFilter();
  const {
    handleChangeCategory,
    currentCategory,
    currentIsOnline,
    handleChangeIsOnline,
    currentIsFeatured,
    handleChangeIsFeatured,
  } = useChangeUrl();

  useEffect(() => {
    if (currentCategory !== "") {
      setValue("category", `${currentCategory}`);
      setValue("isOnline", `${currentIsOnline}`);
      setValue("isFeatured", `${currentIsFeatured}`);
    }
  }, [isSuccessGetCategory]);

  return (
    <div className="h-fit w-full rounded-xl border border-gray-200 p-4 lg:sticky lg:top-20 lg:w-80">
      <h4 className="text-xl font-semibold">Filter</h4>
      <div className="mt-4 flex flex-col gap-4">
        {isSuccessGetCategory ? (
          <Fragment>
            <Controller
              control={control}
              name="category"
              render={({ field: { onChange, ...field } }) => (
                <Autocomplete
                  {...field}
                  defaultSelectedKey={`${currentCategory}`}
                  defaultItems={dataCategory?.data.data || []}
                  label="Category"
                  variant="bordered"
                  labelPlacement="outside"
                  onSelectionChange={(value) => {
                    onChange(value);
                    handleChangeCategory(value !== null ? `${value}` : "");
                  }}
                  placeholder="Search Category Here"
                >
                  {(category: ICategory) => (
                    <AutocompleteItem key={`${category._id}`}>
                      {category.name}
                    </AutocompleteItem>
                  )}
                </Autocomplete>
              )}
            />
            <Controller
              control={control}
              name="isOnline"
              render={({ field: { onChange, ...field } }) => (
                <Select
                  {...field}
                  label="Online / Offline"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Select Online / Offline"
                  defaultSelectedKeys={[`${currentIsOnline}`]}
                  onChange={(e) => handleChangeIsOnline(e.target.value)}
                >
                  <SelectItem key="true" value="true">
                    Online
                  </SelectItem>
                  <SelectItem key="false" value="false">
                    Offline
                  </SelectItem>
                </Select>
              )}
            />
            <Controller
              control={control}
              name="isFeatured"
              render={({ field: { onChange, ...field } }) => (
                <Select
                  {...field}
                  label="Featured"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Select Featured Event"
                  defaultSelectedKeys={[`${currentIsFeatured}`]}
                  onChange={(e) => handleChangeIsFeatured(e.target.value)}
                >
                  <SelectItem key="true" value="true">
                    Yes
                  </SelectItem>
                  <SelectItem key="false" value="false">
                    No
                  </SelectItem>
                </Select>
              )}
            />
          </Fragment>
        ) : (
          <div className="space-y-4">
            <Skeleton className="h-14 w-full rounded-lg" />
            <Skeleton className="h-14 w-full rounded-lg" />
            <Skeleton className="h-14 w-full rounded-lg" />
          </div>
        )}
      </div>
    </div>
  );
};

export default EventFilter;
