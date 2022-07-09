console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java 40 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.trogdor.fault.Kibosh"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.trogdor.fault.Kibosh" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Kibosh"
 , "c2" : "Kibosh()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "KiboshProcess"
 , "c2" : "findProcessObject(String)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addFault(String;KiboshFaultSpec)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "removeFault(String;KiboshFaultSpec)"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.png" 

 , "ligneplantuml" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.svg" }

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
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "4"
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00021] The class Kibosh contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00032] The class KiboshFaultSpec contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00036] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshFaultSpec.equals@POLYN166060 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshFaultSpec.equals@POLYN166060 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshFaultSpec.equals@POLYN166060 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00073] The class KiboshProcess contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess.KiboshProcess@POLYN167526 the MagicNumber/String  'Can't find file ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#83"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00083] Lock statement on synchronized method addFault"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#83"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00083] For method addFault arguments KiboshFaultSpec  toAdd"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#90"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00090] Lock statement on synchronized method removeFault"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#90"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00090] For method removeFault arguments KiboshFaultSpec  toRemove"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess.removeFault@POLYN168402 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess.removeFault@POLYN168402 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess.removeFault@POLYN168402 the MagicNumber/String  'Failed to find fault ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess.removeFault@POLYN168402 the MagicNumber/String  '. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00108] The class KiboshControlFile contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#114"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00114] For method read arguments Path  controlPath"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshControlFile.KiboshControlFile@POLYN169911 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#129"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00129] For method write arguments Path  controlPath"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#134"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00134] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00136] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshControlFile.equals@POLYN170562 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshControlFile.equals@POLYN170562 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.trogdor.fault.Kibosh.KiboshControlFile.equals@POLYN170562 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#114"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00114] Public method read is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#134"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00134] Public method equals is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#141"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00141] Public method hashCode is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00146] Public method toString is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00129] Public method write is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#157"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00157] Lock statement on synchronized method findProcessObject"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method findProcessObject arguments String  mountPath"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.trogdor.fault.Kibosh.findProcessObject@POLYN171551 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#168"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00168] For method addFault arguments String  mountPath|KiboshFaultSpec  spec"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#168"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00168] For method addFault list of called methods Object monObjet|org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess findProcessObjectN172303"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#174"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00174] For method removeFault arguments String  mountPath|KiboshFaultSpec  spec"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#174"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00174] For method removeFault list of called methods Object monObjet|org.apache.kafka.trogdor.fault.Kibosh.KiboshProcess findProcessObjectN172590"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.fault.Kibosh.addFault@POLYN172173"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/fault/Kibosh.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.trogdor.fault.Kibosh.removeFault@POLYN172460"
}} 
]
};
console.log('leListeStr 99 main end');
