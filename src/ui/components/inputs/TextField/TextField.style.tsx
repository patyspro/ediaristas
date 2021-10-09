import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const TextFieldStyled = styled(TextField)`
    .MuiInputBase-root{
        background:${({theme})=> theme.palette.grey[50]}
    }
    .MuiOutLinedInput-notchedOutline{
        border-color:${({theme})=> theme.palette.grey[100]}

    }
`;