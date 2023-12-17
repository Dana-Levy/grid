import classNames from 'classnames';
import styles from './classic-grig.module.scss';

export interface ClassicGrigProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ClassicGrig = ({ className }: ClassicGrigProps) => {
    return <div className={classNames(styles.root, className)}>ClassicGrig</div>;
};
