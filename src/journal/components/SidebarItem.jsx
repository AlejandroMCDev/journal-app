import { TurnedInNot } from "@mui/icons-material"
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { setActiveNote } from "../../store/journal"

export const SidebarItem = ({title = '', body, id, imageUrls = []}) => {

    const dispatch = useDispatch();

    const setNoteActive = () => {
        dispatch( setActiveNote({
            id,
            title,
            body,
            date: new Date().getTime(),
            imageUrls
        }) );
    }

    const newTitle = useMemo(( ) => {
        return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
    },[ title ])

  return (
    <ListItem disablePadding>
        <ListItemButton onClick={ setNoteActive }>
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={ newTitle } />
                <ListItemText secondary={ body } />
            </Grid>
        </ListItemButton>
    </ListItem>
  )
}
