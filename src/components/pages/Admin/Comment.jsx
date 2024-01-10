import { React ,useState } from 'react';

import { Button, Divider, Image, Modal } from 'antd';
import { Input } from 'antd';



export default function Comment() {


    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const { TextArea } = Input;
  return (
    <div>
         {/* <Button
        onClick={() => {
          setShow1(true);
        }}
      >
        showModal
      </Button> */}
      <Modal
        open={show1}
        afterOpenChange={(open) => {
          setShow1(open);
        }}
        onCancel={() => {
          setShow1(false);
        }}
      >
        <p>Need Comment For Rejecting</p>

        <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />

        {/* <Button
          onClick={() => {
            setShow2(true);
          }}
        >
          test2
        </Button> */}
        {/* <Modal
          open={show2}
          afterOpenChange={(open) => {
            setShow2(open);
          }}
          onCancel={() => {
            setShow2(false);
          }}
        >
          <Button
            onClick={() => {
              setShow3(true);
            }}
          >
            test3
          </Button>
          <Modal
            open={show3}
            afterOpenChange={(open) => {
              setShow3(open);
            }}
            onCancel={() => {
              setShow3(false);
            }}
          > 
            <Image
              width={200}
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            />
            <Divider />
            <Image.PreviewGroup
              preview={{
                onChange: (current, prev) =>
                  console.log(`current index: ${current}, prev index: ${prev}`),
              }}
            >
              <Image
                width={200}
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              />
              <Image
                width={200}
                src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
              />
            </Image.PreviewGroup>
          </Modal>
        </Modal> */}
      </Modal>
    </div>
  )
}
