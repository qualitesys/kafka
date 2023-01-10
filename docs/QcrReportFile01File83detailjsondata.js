console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeLogDirsResult.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/admin/DescribeLogDirsResult.java 7 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeLogDirsResult.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.admin.DescribeLogDirsResult"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.admin.DescribeLogDirsResult" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeLogDirsResult.java.html#42"
 , "c1" : "DescribeLogDirsResult"
 , "c2" : "DescribeLogDirsResult(Map<Integer,KafkaFuture<Map<String,LogDirDescription>>>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeLogDirsResult.java.html#52"
 , "c1" : "Map<Integer,KafkaFuture<Map<String,DescribeLogDirsResponse.LogDirInfo>>>"
 , "c2" : "values()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeLogDirsResult.java.html#60"
 , "c1" : "Map<String,DescribeLogDirsResponse.LogDirInfo>"
 , "c2" : "convertMapValues(Map<String,LogDirDescription>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeLogDirsResult.java.html#81"
 , "c1" : "Map<Integer,KafkaFuture<Map<String,LogDirDescription>>>"
 , "c2" : "descriptions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeLogDirsResult.java.html#91"
 , "c1" : "KafkaFuture<Map<Integer,Map<String,DescribeLogDirsResponse.LogDirInfo>>>"
 , "c2" : "all()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeLogDirsResult.java.html#103"
 , "c1" : "KafkaFuture<Map<Integer,Map<String,LogDirDescription>>>"
 , "c2" : "allDescriptions()"
 , "c3" : "2"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeLogDirsResult.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeLogDirsResult.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeLogDirsResult.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method convertMapValues arguments Map&lt;String ,LogDirDescription &gt;  map"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeLogDirsResult.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00060] For method convertMapValues list of called methods Object monObjet|java.util.Set map_entrySetN164441"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeLogDirsResult.java.html#60"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00060] The argument map is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeLogDirsResult.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.clients.admin.DescribeLogDirsResult.convertMapValues@POLYN164241 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeLogDirsResult.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.clients.admin.DescribeLogDirsResult.allDescriptions@POLYN166718 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeLogDirsResult.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00052] Public method values is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeLogDirsResult.java.html#91"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00091] Public method all is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/admin/DescribeLogDirsResult.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
