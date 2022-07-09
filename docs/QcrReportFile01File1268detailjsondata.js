console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html" 
 , "texte" : "File jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java 60 rule violations " 
 , "fic2"  : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.jmh.acl.AclAuthorizerBenchmark"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.jmh.acl.AclAuthorizerBenchmark" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setup()"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "prepareAclCache()"
 , "c3" : "10"
 , "c4" : "31"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "prepareAclToUpdate()"
 , "c3" : "3"
 , "c4" : "9"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "randomResourceName(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Boolean"
 , "c2" : "shouldDeny()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "tearDown()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "testAclsIterator()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "testAuthorizer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "testAuthorizeByResourceType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "testUpdateCache()"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.png" 

 , "ligneplantuml" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "14"
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
 , "c4" : "40"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
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
   "c1" : "00056"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00056] The class AclAuthorizerBenchmark contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.setup@POLYN186414 the MagicNumber/String  95 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.setup@POLYN186414 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.setup@POLYN186414 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.setup@POLYN186414 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.setup@POLYN186414 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.setup@POLYN186414 the MagicNumber/String  'someclient' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.setup@POLYN186414 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.setup@POLYN186414 the MagicNumber/String  '1' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00092"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.setup@POLYN186414 the MagicNumber/String  '127.0.0.1' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.setup@POLYN186414 the MagicNumber/String  'listener' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.setup@POLYN186414 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00094"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#94"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00094] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.setup@POLYN186414 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.setup@POLYN186414 the MagicNumber/String  'someclient' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.setup@POLYN186414 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.setup@POLYN186414 the MagicNumber/String  '1' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.setup@POLYN186414 the MagicNumber/String  'listener' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00096"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.setup@POLYN186414 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#99"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00099] For method prepareAclCache list of called methods Object monObjet|String principal_toStringN189104"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00102] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00107"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00107] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00111] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00113] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00120] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00111] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00113] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00120"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00120] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00131] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00137] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00148] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00155] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00159] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclCache@POLYN187958 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclCache@POLYN187958 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00103] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclCache@POLYN187958 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclCache@POLYN187958 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclCache@POLYN187958 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclCache@POLYN187958 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclCache@POLYN187958 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00112"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclCache@POLYN187958 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclCache@POLYN187958 the MagicNumber/String  '*' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclCache@POLYN187958 the MagicNumber/String  '*' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclCache@POLYN187958 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclCache@POLYN187958 the MagicNumber/String  '127.0.0.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00137"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00137] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclCache@POLYN187958 the MagicNumber/String  '127.0.0.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclCache@POLYN187958 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclCache@POLYN187958 the MagicNumber/String  10 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclCache@POLYN187958 the MagicNumber/String  '127.0.0' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclCache@POLYN187958 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00174] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclToUpdate@POLYN193007 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00175] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclToUpdate@POLYN193007 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.prepareAclToUpdate@POLYN193007 the MagicNumber/String  '127.0.0' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#186"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00186] For method randomResourceName arguments String  prefix"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.randomResourceName@POLYN194327 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00187] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.randomResourceName@POLYN194327 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.jmh.acl.AclAuthorizerBenchmark.shouldDeny@POLYN194562 the MagicNumber/String  100.0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#195"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00195] Public method tearDown is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#200"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00200] Public method testAclsIterator is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00215"
 , "c1link" : "./qc/jmh-benchmarks/src/main/java/org/apache/kafka/jmh/acl/AclAuthorizerBenchmark.java.html#215"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00215] Public method testUpdateCache is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
