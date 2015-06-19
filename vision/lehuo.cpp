#include <opencv2/highgui/highgui.hpp>
#include <opencv2/imgproc/imgproc.hpp>
#include "opencv2/imgproc/imgproc_c.h"
#include <iostream>
#include <cstdlib>
using namespace std;
using namespace cv;
IplImage* image[4];   //无座图片
const int N = 1;  //检测数目
int rect[ N+1][ 3];    //锚点
//prama
int t = 10;  //阈值  ml
const double Per = 1.0/2.0;

IplImage *dst_ipl;
CvSize dst_cvsize;
void initrect()
{
	rect[1][1] = 0;rect[1][2] = 0; //rect[i][1] rect[i][2]
}

void initimg()
{
	IplImage* frame = cvLoadImage("answer.jpg");
	image[1] = cvCreateImage( dst_cvsize, frame->depth,frame->nChannels);
	cvResize( frame, image[1],CV_INTER_CUBIC);
}

IplImage* work( IplImage* frame)
{
	for(int l = 1;l<=N;l++)
	{
		int width = image[l]->width;
		int height  = image[l]->height;
		int widthStep = image[l]->widthStep;
		int fwidth = frame->width;
		int fheight  = frame->height;
		int fwidthStep = frame->widthStep;
		int count = 0;
		for(int i = 0; i < height; i++ )
		{
			uchar *pchar = (uchar*)image[l]->imageData+i*widthStep;    //step
			uchar *pchar2 = (uchar*)frame->imageData+(i+rect[l][1])*fwidthStep;  
			for(int j = 0; j < width; j++ ) 
			{
				uchar* temp = pchar + j*(image[l]->nChannels);					
				uchar* temp2 = pchar2 + (j+rect[l][2])*(frame->nChannels);
				if( abs(temp[0]-temp2[0])<t||abs(temp[1]-temp2[1])<t||abs(temp[2]-temp2[2])<t)   //发现改变
				{	
					temp2[0] = 0;
					temp2[1] = 0;
					temp2[2] = 0;
					
					count++;
					double T = (double)count/(width*height);
					if( T>Per)  //比例超过1/2
					{
						cvRectangle( frame,cvPoint(rect[l][2],rect[l][1]),cvPoint(rect[l][2]+width,rect[l][1] + height),cvScalar(0,0,255),2);
						cout<<1<<endl;
						return frame;
					}
				}
			}
		}
		//cvLine(frame,cvPoint(0,0),cvPoint(200,200),cvScalar(255,0,0), 2);
	}
	cout<<0<<endl;
	return frame; 
}
int main( int argc, char** argv)
{
	//cvNamedWindow( "TH", CV_WINDOW_AUTOSIZE);
	initrect();
	dst_cvsize.width = 300;
	dst_cvsize.height = 300;
	initimg();

	IplImage* frame;
	frame = cvLoadImage("test.jpg");
	dst_ipl = cvCreateImage( dst_cvsize, frame->depth,frame->nChannels);
	cvResize( frame, dst_ipl, CV_INTER_CUBIC);
	frame = work( dst_ipl);  //change frame
//	cvShowImage("TH",frame);  //display frame
	cvSaveImage("result.jpg",frame);
	/*
	while(1)
	{
		frame = cvQueryFrame(capture);
		if(!frame)break;
		if(cvWaitKey(60) == '0'+27)
		break;

		frame = work( frame);  //change frame
				cvShowImage("TH",frame);  //display frame
	//	cvSaveImage("yes.png",frame);
	//	break;
	}
	*/

	return 0;
}


