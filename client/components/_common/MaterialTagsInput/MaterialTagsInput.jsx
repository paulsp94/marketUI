import React from 'react';
import TagsInput from 'react-tagsinput';
import Chip from 'material-ui/Chip';
import classNames from 'classnames';
import './MaterialTagsInput.css';

const renderTag = (props) => {
  let {tag, key, onRemove, getTagDisplayValue, classNameRemove, ...other} = props;
  return (
    <Chip
      key={key}
      style={{margin: '5px 5px 0 0', display: 'inline-flex'}}
      onRequestDelete={() => onRemove(key)}
      {...other}
    >
      {getTagDisplayValue(tag)}
    </Chip>
  )
};

const renderInput = (props) => {
  const { onChange, value, addTag, ...other } = props;
  return (
    <input
      style={{lineHeight: '38px', marginLeft: '4px'}}
      onChange={onChange}
      value={value}
      {...other}
      placeholder='add one...'
    />
  )
};

const renderLayout = (props) => (tagComponents, inputComponent) => {
  return (
    <div>
      <label className={classNames({'dirty': props.value.length})}>{props.label}</label>
      {tagComponents}
      {inputComponent}
      <hr className='underline' />
    </div>
  )
};

const MaterialTagsInput = (props) => (
  <TagsInput
    renderTag={renderTag}
    renderInput={renderInput}
    renderLayout={renderLayout(props)}
    {...props}
  />
);

export default MaterialTagsInput;
