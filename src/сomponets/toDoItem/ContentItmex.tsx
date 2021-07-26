
import styled from 'styled-components';
import { Todo } from '../../TypesTodo';

export interface ContentItemProps {
  toggleEditMode: (enable: boolean) => void;
  todo: Todo;
  removeTodo: (todoId: number) => void;
}

const ContentItemStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button.attrs({
  className : 'btn btn-danger',
})``;

const ContentItmex  = ({ toggleEditMode, todo, removeTodo }: ContentItemProps) => (
  <ContentItemStyle
    onDoubleClick={() => { toggleEditMode(true); }}
  >

    <span>{todo.text}</span>
    <Button
      onClick={() => removeTodo(todo.id)}
      type="button"
    >
      X
    </Button>
  </ContentItemStyle>

);

export default ContentItmex;
