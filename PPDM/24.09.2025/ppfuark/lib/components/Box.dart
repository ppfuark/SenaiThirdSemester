import 'package:flutter/material.dart';

class Box extends StatelessWidget {
  final String num;
  final Color? color;
  final String? imgUrl;

  const Box({super.key, required this.num, this.color, this.imgUrl});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width * 0.45,
      height: MediaQuery.of(context).size.width * 0.45,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        color: Colors.deepPurple, // cor base
        // image: imgUrl != null
        //     ? DecorationImage(image: AssetImage(imgUrl!),fit: BoxFit.cover)
        //     : null,
            
      ),
      child: 
                  imgUrl != null ? 
                  Stack(
                    children: [
                       Image.network("${imgUrl!}",fit: BoxFit.cover,),
                      Text("$num")
                    ],
                  ) :Center(
        child: Text(
          num,
          style: TextStyle(
            color: color ?? Colors.white,
            fontSize: 50,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
                 

        
      


      // child: Center(
      //   child: Text(
      //     num,
      //     style: TextStyle(
      //       color: color ?? Colors.white,
      //       fontSize: 50,
      //       fontWeight: FontWeight.bold,
      //     ),
      //   ),
      // ),
    );
  }
}
