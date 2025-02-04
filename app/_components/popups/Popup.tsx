import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';

interface PopupProps {
    open: boolean;
    title?: string;
    onClose?: () => void;
    children: React.ReactNode;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const Popup: React.FC<PopupProps> = ({
    open,
    title,
    onClose,
    children,
    maxWidth = 'sm',
}) => {
    return (
        <Dialog open={open} maxWidth={maxWidth} onClose={onClose} fullWidth>
            {title && (
                <DialogTitle
                    sx={{
                        m: 0,
                        color: '#ba1829',
                        fontFamily: "'Baloo 2', cursive;",
                        fontSize: '1.5rem',
                        fontWeight: 500,
                        letterSpacing: '0.0075em',
                    }}
                >
                    {title}
                    <IconButton
                        sx={{
                            position: 'absolute',
                            right: 15,
                            top: 12,
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
