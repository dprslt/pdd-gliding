import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Slide,
    useMediaQuery,
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';

interface PopupProps {
    open: boolean;
    title?: string;
    onClose?: () => void;
    children: React.ReactNode;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Popup: React.FC<PopupProps> = ({
    open,
    title,
    onClose,
    children,
    maxWidth = 'sm',
}) => {
    const fullScreen = useMediaQuery('(max-width:500px)');

    return (
        <Dialog
            TransitionComponent={Transition}
            open={open}
            maxWidth={maxWidth}
            onClose={onClose}
            fullWidth
            fullScreen={fullScreen}
            sx={{
                marginTop: fullScreen ? '2rem' : 0,
                zIndex: 1550,
            }}
        >
            {title && (
                <DialogTitle
                    sx={{
                        m: 0,
                        color: '#ba1829',
                        fontFamily: "'Baloo 2', cursive;",
                        fontSize: '1.5rem',
                        fontWeight: 500,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    {title}
                    <IconButton
                        sx={{
                            flex: 0,
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                            },
                        }}
                        onClick={onClose}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </IconButton>
                </DialogTitle>
            )}
            <DialogContent>{children}</DialogContent>
        </Dialog>
    );
};

export default Popup;
