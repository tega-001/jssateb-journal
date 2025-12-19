import {
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Controller } from 'react-hook-form';

//TODO: trim Code

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: '15px 5px 25px',
    },
    textField: {
        marginTop: '8px',
        marginBottom: '8px',
    },
    group: {
        margin: '10px',
    },
    radio: {
        '&$checked': {
            color: theme.palette.primary.main,
        },
    },
    file: {
        backgroundColor: '#f1f1f1',
        padding: '20px',
        borderRadius: '5px',
        marginTop: '15px',
        marginBottom: '35px',
        '& .MuiInput-input': {
            height: '35px',
            '&::-webkit-file-upload-button': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.875rem',
                borderRadius: '5px',
                padding: '10px 7px',
                marginRight: '15px',
                textTransform: 'uppercase',
            },
            '&::-ms-browse': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.common.white,
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.875rem',
                borderRadius: '5px',
                padding: '10px 7px',
                marginRight: '15px',
                textTransform: 'uppercase',
            },
        },
    },
    menuItem: {
        color: 'white',
        backgroundColor: '#78100D !important',
    },
    checked: {},
}));

const InputElement = ({
    onChange,
    value,
    label,
    elementType,
    type,
    error,
    options,
    disabled,
    defaultValue,
}) => {
    const classes = useStyles();
    let inputElement = null;
    switch (elementType) {
        case 'TextField':
            inputElement = (
                <TextField
                    className={classes.textField}
                    label={label}
                    type={type}
                    variant="outlined"
                    required
                    fullWidth
                    disabled={disabled}
                    defaultValue={defaultValue}
                    value={value}
                    onChange={onChange}
                    error={error !== undefined}
                    helperText={error ? error.message : null}
                />
            );
            break;
        case 'RadioGroup':
            inputElement = (
                <FormControl
                    component="fieldset"
                    className={classes.formControl}
                >
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                        row
                        label="gender"
                        name="row-radio-buttons-group"
                        className={classes.group}
                        value={value || 'Female'}
                        onChange={onChange}
                    >
                        <FormControlLabel
                            value="Female"
                            control={
                                <Radio
                                    classes={{
                                        root: classes.radio,
                                        checked: classes.checked,
                                    }}
                                />
                            }
                            label="Female"
                        />
                        <FormControlLabel
                            value="Male"
                            control={
                                <Radio
                                    classes={{
                                        root: classes.radio,
                                        checked: classes.checked,
                                    }}
                                />
                            }
                            label="Male"
                        />
                        <FormControlLabel
                            value="Other"
                            control={
                                <Radio
                                    classes={{
                                        root: classes.radio,
                                        checked: classes.checked,
                                    }}
                                />
                            }
                            label="Other"
                        />
                        <FormControlLabel
                            value="Prefer not to specify"
                            control={
                                <Radio
                                    classes={{
                                        root: classes.radio,
                                        checked: classes.checked,
                                    }}
                                />
                            }
                            label="Prefer not to specify"
                        />
                    </RadioGroup>
                </FormControl>
            );
            break;
        case 'UploadFile':
            inputElement = (
                <>
                    <InputLabel>Upload File</InputLabel>
                    <TextField
                        type={type}
                        className={classes.file}
                        value={value}
                        variant="standard"
                        InputProps={{
                            disableUnderline: true,
                        }}
                        onChange={onChange}
                        error={error !== undefined}
                        helperText={error ? error.message : null}
                    />
                </>
            );
            break;
        case 'Dropdown':
            inputElement = (
                <TextField
                    label={label}
                    type={type}
                    variant="outlined"
                    required
                    fullWidth
                    select
                    margin="normal"
                    value={value}
                    onChange={onChange}
                    error={error !== undefined}
                    helperText={error ? error.message : null}
                >
                    {options.map((option) => (
                        <MenuItem
                            classes={{ selected: classes.menuItem }}
                            key={option.value}
                            value={option.value}
                        >
                            {option.title}
                        </MenuItem>
                    ))}
                </TextField>
            );
            break;
        case 'MultiLine':
            inputElement = (
                <TextField
                    label={label}
                    type={type}
                    variant="outlined"
                    required
                    fullWidth
                    multiline
                    rows={4}
                    disabled={disabled}
                    margin="normal"
                    value={value}
                    onChange={onChange}
                    error={error !== undefined}
                    helperText={error ? error.message : null}
                />
            );
            break;
    }
    return inputElement;
};

const Input = ({
    control,
    name,
    label,
    elementType,
    type,
    error,
    options,
    disabled,
    defaultValue,
}) => {
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <InputElement
                        elementType={elementType}
                        value={value}
                        onChange={onChange}
                        label={label}
                        type={type}
                        error={error}
                        options={options}
                        disabled={disabled}
                        defaultValue={defaultValue}
                    />
                )}
            />
        </>
    );
};

export default Input;
