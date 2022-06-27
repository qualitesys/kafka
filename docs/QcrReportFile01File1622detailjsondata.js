console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/Window.java 21 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.kstream.Window"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.Window" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Window"
 , "c2" : "Window(long;long)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "start()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "end()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Instant"
 , "c2" : "startTime()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Instant"
 , "c2" : "endTime()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "overlap(Window)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00009"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00009] The class Window contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method org.apache.kafka.streams.kstream.Window.Window@POLYN174195 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.streams.kstream.Window.Window@POLYN174195 the MagicNumber/String  'Window startMs time cannot be negative.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.streams.kstream.Window.Window@POLYN174195 the MagicNumber/String  'Window endMs time cannot be smaller than window startMs time.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method overlap arguments Window  other"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method equals arguments Object  obj"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00063] The same method call obj.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.streams.kstream.Window.equals@POLYN175969 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.kstream.Window.equals@POLYN175969 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.streams.kstream.Window.equals@POLYN175969 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.streams.kstream.Window.equals@POLYN175969 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.streams.kstream.Window.hashCode@POLYN176614 the MagicNumber/String  32 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.streams.kstream.Window.hashCode@POLYN176614 the MagicNumber/String  0xFFFFFFFFL should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.kstream.Window.toString@POLYN176869 the MagicNumber/String  'Window{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.streams.kstream.Window.toString@POLYN176869 the MagicNumber/String  'startMs=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.streams.kstream.Window.toString@POLYN176869 the MagicNumber/String  ', endMs=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.streams.kstream.Window.toString@POLYN176869 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#53"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00053] Public method overlap is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.kstream.Window.hashCode@POLYN176614"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#73"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00073] In the recursive method org.apache.kafka.streams.kstream.Window.hashCode@POLYN176614 the MagicNumber/String 0xFFFFFFFFL MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Window.java.html#73"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00073] In the recursive method org.apache.kafka.streams.kstream.Window.hashCode@POLYN176614 the MagicNumber/String 32 MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
