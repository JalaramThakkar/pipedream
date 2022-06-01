import base from "../_common/base.mjs";
import {
  recordId, recordData,
} from "../_common/props.mjs";

export default {
  ...base,
  key: "knack-update-record",
  name: "Update Record",
  description:
    "Update a Record for a Knack object [(See docs here)](https://docs.knack.com/docs/object-based-put)",
  version: "0.0.1",
  type: "action",
  props: {
    ...base.props,
    recordId,
    recordData,
  },
  async run({ $ }) {
    const data = this.recordData;

    const response = await this.knack.httpRequest($, {
      method: "PUT",
      objectKey: this.objectKey,
      recordId: this.recordId,
      data,
    });

    $.export("$summary", "Updated record successfully");

    return response;
  },
};