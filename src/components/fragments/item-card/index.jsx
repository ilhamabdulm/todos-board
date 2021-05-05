import PropTypes from 'prop-types';

import { CardBase } from 'components/atoms';

import styles from './styles.module.css';
import { Button } from 'components/atoms';
import {
  ArrowLeft,
  ArrowRight,
  DeleteOutlined,
  Dots,
  EditOutlined,
} from 'lib/images';
import { Progress } from 'components/atoms';
import { Dropdown } from '..';

const ItemCard = (props) => {
  const { data, openEdit, handleDelete, handleMove } = props;

  const dropdownMenu = [
    {
      text: (
        <>
          <ArrowLeft /> &nbsp;&nbsp; Move Left
        </>
      ),
      action: () => console.log('menu 1'),
    },
    {
      text: (
        <>
          <ArrowRight /> &nbsp;&nbsp; Move Right
        </>
      ),
      action: () => console.log('menu 1'),
    },
    {
      text: (
        <>
          <EditOutlined /> &nbsp;&nbsp; Edit
        </>
      ),
      action: () => openEdit(data),
    },
    {
      text: (
        <>
          <DeleteOutlined /> &nbsp;&nbsp; Delete
        </>
      ),
      action: () => handleDelete(data),
    },
  ];

  return (
    <CardBase variant="default">
      {!data ? (
        <span className={styles['placeholder']}>No task avalaible</span>
      ) : (
        <section className={styles['item-content']}>
          <h4>{data.name}</h4>

          <div className={styles['action-group']}>
            <div style={{ width: '60%' }}>
              <Progress
                percentage={data.progress_percentage}
                isDone={data.done}
              />
            </div>

            <Dropdown menu={dropdownMenu}>
              <Button
                icon={<Dots />}
                variant="text"
                style={{ padding: 0, cursor: 'pointer' }}
              />
            </Dropdown>
          </div>
        </section>
      )}
    </CardBase>
  );
};

ItemCard.defaultProps = {
  data: null,
  openEdit: () => {},
  handleDelete: () => {},
  handleMove: () => {},
};

ItemCard.propTypes = {
  data: PropTypes.object,
  openEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  handleMove: PropTypes.func,
};

export default ItemCard;
