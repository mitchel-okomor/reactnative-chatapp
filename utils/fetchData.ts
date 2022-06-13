const baseURl = 'https://92r2ggv7u2.execute-api.af-south-1.amazonaws.com/dev';
//'http://ec2-13-245-209-129.af-south-1.compute.amazonaws.com:3003';

export const getData = async (url:string) => {
  const res = await fetch(`${baseURl}/${url}`, {
    method: 'GET',
    headers: {
      //  'Content-Type': 'multipart/form-data'
      // authid: 78,
      'x-api-key': '3yBrArNb838bdyIPpLith6dpr0NHCcc66J4AR313',
      authorizationToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM5LCJlbWFpbCI6Im1pdGNoZWwub2tvbW9yQGdtYWlsLmNvbSIsImlhdCI6MTY1NDcwMDIzOX0.Dzmk9AkIHU3SP_pwSVDsjnEgS6s9g5Q3SfUEwmZ41VM'
    }
  });
  const data = await res.json();
  console.log(res.status);
  return data;
};

export const postData = async (url:string, body:any) => {
  const res = await fetch(`${baseURl}/${url}`, {
    method: 'POST',
    headers: {
      //  'Content-Type': 'multipart/form-data'
      // authid: 78,
      'x-api-key': '3yBrArNb838bdyIPpLith6dpr0NHCcc66J4AR313',
      authorizationToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTM5LCJlbWFpbCI6Im1pdGNoZWwub2tvbW9yQGdtYWlsLmNvbSIsImlhdCI6MTY1NDcwMDIzOX0.Dzmk9AkIHU3SP_pwSVDsjnEgS6s9g5Q3SfUEwmZ41VM'
    },
    body: body
  });

  const data = await res.json();
  return data;
};

export const putData = async (url:string, body:any) => {
  const res = await fetch(`${baseURl}/${url}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  const data = await res.json();
  return data;
};

export const deleteData = async (url:string) => {
  const res = await fetch(`${baseURl}/${url}`, {
    method: 'DELETE'
  });

  const data = await res.json();
  return data;
};
