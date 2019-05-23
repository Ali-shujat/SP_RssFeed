import * as React from 'react';
import styles from './RssFeed.module.scss';
import { IRssFeedProps } from './IRssFeedProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class RssFeed extends React.Component<IRssFeedProps, {}> {
  public render(): React.ReactElement<IRssFeedProps> {
    return (
      <div className={ styles.rssFeed }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.feedUrl)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
