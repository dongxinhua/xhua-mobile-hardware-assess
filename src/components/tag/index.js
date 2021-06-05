import React, { PureComponent } from "react"
import { Tag, Select, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
  TagWrapper
} from "./style";
const { Option } = Select;



export class EditableTagGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      inputVisible: false,
      inputValue: '',
      editInputIndex: -1,
      editInputValue: '',
    };
  }

  componentDidMount() {
    this.props.changeContrast(this.state.tags);
  }

  handleClose = removedTag => {
    // 关闭
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    this.setState({ tags });
    this.props.changeContrast(tags);
  };

  showInput = () => {
    // 点击tag
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    // 输入内容
    // console.log(e);
    this.setState({ inputValue: e });
  };

  handleInputConfirm = () => {
    // 输入完毕
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
    this.props.changeContrast(tags);
  };

  handleEditInputChange = e => {
    // 修改自身
    this.setState({ editInputValue: e });
  };

  handleEditInputConfirm = () => {
    // 修改自身完毕
    let newTags = null;
    this.setState(({ tags, editInputIndex, editInputValue }) => {
      newTags = [...tags];
      newTags[editInputIndex] = editInputValue;
      console.log(newTags);
      return {
        tags: newTags,
        editInputIndex: -1,
        editInputValue: '',
      };
    }, () => {
      this.props.changeContrast(newTags);
    });
    
  };

  saveInputRef = input => {
    this.input = input;
  };

  saveEditInputRef = input => {
    this.editInput = input;
  };

  render() {
    const { tags, inputVisible, inputValue, editInputIndex, editInputValue } = this.state;
    return (
      <TagWrapper>
        {tags.map((tag, index) => {
          if (editInputIndex === index) {
            return (
              <Select
                ref={this.saveEditInputRef}
                key={tag}
                style={{ width: 180 }}
                className="tag-input"
                value={editInputValue}
                onChange={this.handleEditInputChange}
                onBlur={this.handleEditInputConfirm}
              >
                {this.props.contrastArr.map(item => {
                  return <Option value={item} key={item}>{item}</Option>
                })}
              </Select>
            );
          }

          const isLongTag = tag.length > 30;

          const tagElem = (
            <Tag
              className="edit-tag"
              key={tag}
              closable={index !== 0}
              onClose={() => this.handleClose(tag)}
            >
              <span
                onDoubleClick={e => {
                  if (index !== 0) {
                    this.setState({ editInputIndex: index, editInputValue: tag }, () => {
                      this.editInput.focus();
                    });
                    e.preventDefault();
                  }
                }}
              >
                {isLongTag ? `${tag.slice(0, 30)}...` : tag}
              </span>
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
        {inputVisible && (
          <Select
            ref={this.saveInputRef}
            type="text"
            style={{ width: 180 }}
            className="tag-input"
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
          >
            {this.props.contrastArr.map(item => {
              return <Option value={item} key={item}>{item}</Option>
            })}
          </Select>
        )}
        {!inputVisible && (
          <Tag className="site-tag-plus" onClick={this.showInput}>
            <PlusOutlined /> 添加对比
          </Tag>
        )}
      </TagWrapper>
    );
  }
}