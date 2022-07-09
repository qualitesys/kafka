console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html" 
 , "texte" : "File shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java 44 rule violations " 
 , "fic2"  : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Consumer<MetadataNodeManager.Data>"
 , "c2" : "org.apache.kafka.shell.GlobVisitor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.shell.GlobVisitor" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "GlobVisitor"
 , "c2" : "GlobVisitor(String;Consumer<Optional<MetadataNodeInfo>>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "accept(MetadataNodeManager.Data)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "accept(List<String>;int;MetadataNode;String[])"
 , "c3" : "9"
 , "c4" : "21"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.png" 

 , "ligneplantuml" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "33"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class GlobVisitor contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00023] The class MetadataNodeInfo contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.shell.GlobVisitor.MetadataNodeInfo.lastPathComponent@POLYN161385 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.shell.GlobVisitor.MetadataNodeInfo.lastPathComponent@POLYN161385 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.shell.GlobVisitor.MetadataNodeInfo.lastPathComponent@POLYN161385 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.shell.GlobVisitor.MetadataNodeInfo.absolutePath@POLYN161670 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.shell.GlobVisitor.MetadataNodeInfo.absolutePath@POLYN161670 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.shell.GlobVisitor.MetadataNodeInfo.equals@POLYN162018 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.shell.GlobVisitor.MetadataNodeInfo.equals@POLYN162018 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.shell.GlobVisitor.MetadataNodeInfo.equals@POLYN162018 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.shell.GlobVisitor.MetadataNodeInfo.equals@POLYN162018 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.shell.GlobVisitor.MetadataNodeInfo.toString@POLYN162604 the MagicNumber/String  'MetadataNodeInfo(path=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.shell.GlobVisitor.MetadataNodeInfo.toString@POLYN162604 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.shell.GlobVisitor.MetadataNodeInfo.toString@POLYN162604 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.shell.GlobVisitor.MetadataNodeInfo.toString@POLYN162604 the MagicNumber/String  ', node=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.shell.GlobVisitor.MetadataNodeInfo.toString@POLYN162604 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method accept arguments MetadataNodeManager.Data  data"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#79"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00079] The argument data is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.shell.GlobVisitor.accept@POLYN163312 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.shell.GlobVisitor.accept@POLYN163312 the MagicNumber/String  '/' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.shell.GlobVisitor.accept@POLYN163312 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.shell.GlobVisitor.accept@POLYN163312 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00089] For method accept arguments List&lt;String &gt;  globComponents|int  componentIndex|MetadataNode  node|String[]  path"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#89"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00089] For method accept list of called methods Object monObjet|String globComponent_componentN165607"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#89"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00089] The argument globComponents is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#92"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00092] The argument path is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00119"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00119] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00121] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.shell.GlobVisitor.accept@POLYN164060 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.shell.GlobVisitor.accept@POLYN164060 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.shell.GlobVisitor.accept@POLYN164060 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.shell.GlobVisitor.accept@POLYN164060 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.shell.GlobVisitor.accept@POLYN164060 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.shell.GlobVisitor.accept@POLYN164060 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.shell.GlobVisitor.accept@POLYN164060 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.shell.GlobVisitor.accept@POLYN164060 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.shell.GlobVisitor.accept@POLYN164060 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.shell.GlobVisitor.accept@POLYN164060 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.shell.GlobVisitor.accept@POLYN164060 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.shell.GlobVisitor.accept@POLYN164060 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.shell.GlobVisitor.accept@POLYN164060 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.shell.GlobVisitor.accept@POLYN164060 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00125"
 , "c1link" : "./qc/shell/src/main/java/org/apache/kafka/shell/GlobVisitor.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.shell.GlobVisitor.accept@POLYN164060 the MagicNumber/String  true should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
