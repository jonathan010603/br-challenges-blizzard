import { IDropdown } from "../contexts/DropdownContext";

const clickDropdownTriggers = (page: number, dropdownCtx: IDropdown) => {
  const openDropdown = () => dropdownCtx.setDropdown({ open: true, page: page });
  const closeDropdown = () => {
    dropdownCtx.setDropdown({ ...dropdownCtx.dropdown, open: false });
    document.removeEventListener("click", handleClickOutside, true);
  };

  const handleClickOutside = (e: Event) => {
    if (dropdownCtx.Menu__DropdownRef) {
      !dropdownCtx.Menu__DropdownRef.current?.contains(
        e.target as HTMLElement
      ) &&
        e.target !== document.getElementById("gamesDropdown") &&
        e.target !== document.getElementById("sportsDropdown") &&
        closeDropdown();
    }
  };

  if (dropdownCtx.dropdown.open) {
    dropdownCtx.dropdown.page === page
      ? closeDropdown()
      : dropdownCtx.setDropdown({ ...dropdownCtx.dropdown, page: page });
  } else {
    openDropdown();
    document.addEventListener("click", handleClickOutside, true);
  }
};

export default clickDropdownTriggers;
