console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/examples/src/main/java/kafka/examples/Producer.java.html" 
 , "texte" : "File examples/src/main/java/kafka/examples/Producer.java 28 rule violations " 
 , "fic2"  : "./qc/examples/src/main/java/kafka/examples/Producer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Thread"
 , "c2" : "kafka.examples.Producer"
}} 
,
{ "ligne" : {
   "c1" : "Callback"
 , "c2" : "kafka.examples.DemoCallBack"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "kafka.examples.Producer" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Producer"
 , "c2" : "Producer(String;Boolean;String;boolean;int;int;CountDownLatch)"
 , "c3" : "3"
 , "c4" : "13"
}} 
,
{ "ligne" : {
   "c1" : "KafkaProducer<Integer,String>"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "run()"
 , "c3" : "4"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "DemoCallBack"
 , "c2" : "DemoCallBack(long;int;String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "onCompletion(RecordMetadata;Exception)"
 , "c3" : "3"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/examples/src/main/java/kafka/examples/Producer.java.png" 

 , "ligneplantuml" : "./qc/examples/src/main/java/kafka/examples/Producer.java.svg" }

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
"data13a" : [
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
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
 , "c4" : "22"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method kafka.examples.Producer.Producer@POLYN179256 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method kafka.examples.Producer.Producer@POLYN179256 the MagicNumber/String  'DemoProducer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method kafka.examples.Producer.Producer@POLYN179256 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method kafka.examples.Producer.Producer@POLYN179256 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00059] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00071] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00071] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method kafka.examples.Producer.run@POLYN181037 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method kafka.examples.Producer.run@POLYN181037 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method kafka.examples.Producer.run@POLYN181037 the MagicNumber/String  'Message_' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method kafka.examples.Producer.run@POLYN181037 the MagicNumber/String  'Sent message: (' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method kafka.examples.Producer.run@POLYN181037 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method kafka.examples.Producer.run@POLYN181037 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method kafka.examples.Producer.run@POLYN181037 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method kafka.examples.Producer.run@POLYN181037 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method kafka.examples.Producer.run@POLYN181037 the MagicNumber/String  'Producer sent ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method kafka.examples.Producer.run@POLYN181037 the MagicNumber/String  ' records successfully' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00083] The class DemoCallBack contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#96"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00096] For method onCompletion arguments RecordMetadata  metadata|Exception  exception"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#96"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00096] The argument exception is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method kafka.examples.DemoCallBack.onCompletion@POLYN183437 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method kafka.examples.DemoCallBack.onCompletion@POLYN183437 the MagicNumber/String  'message(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method kafka.examples.DemoCallBack.onCompletion@POLYN183437 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method kafka.examples.DemoCallBack.onCompletion@POLYN183437 the MagicNumber/String  ') sent to partition(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method kafka.examples.DemoCallBack.onCompletion@POLYN183437 the MagicNumber/String  '), ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method kafka.examples.DemoCallBack.onCompletion@POLYN183437 the MagicNumber/String  'offset(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method kafka.examples.DemoCallBack.onCompletion@POLYN183437 the MagicNumber/String  ') in ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/examples/src/main/java/kafka/examples/Producer.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method kafka.examples.DemoCallBack.onCompletion@POLYN183437 the MagicNumber/String  ' ms' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
