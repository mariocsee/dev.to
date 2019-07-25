import { h } from 'preact';
import PropTypes from 'prop-types';

const ContactViaConnect = ({ onChange, defaultValue }) => (
  <div className="field">
    <label className="listingform__label" htmlFor="contact_via_connect">
      Allow Users to Message Me Via In-App Chat (DEV Connect)
    </label>
    <input 
      type="checkbox"
      className="listingform__input listingform__contact_via_connect"
      id="contact_via_connect"
      name="classified_listing[contact_via_connect]"
      value={defaultValue}
      onInput={onChange}
    />
  </div>
)

ContactViaConnect.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.bool.isRequired,
}

export default ContactViaConnect;
