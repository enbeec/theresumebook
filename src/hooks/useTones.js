export function useTones() {
  const endpoint =
    "https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/974849a3-f3fb-403c-a36a-9fafac5c9092";
  const endpointVersion = "2017-09-21";
  const keyname = process.env.REACT_APP_TRB_KEYNAME;
  const key = process.env.REACT_APP_TRB_KEY;
  return (text) =>
    fetch(`${endpoint}/v3/tone?version=${endpointVersion}&sentences=false`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(keyname + ":" + key)}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: text }),
    }).then((res) => res.json());
}

export default useTones;
